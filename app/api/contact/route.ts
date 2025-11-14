// app/api/contact/route.ts
import { NextResponse } from "next/server";
import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY as string);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const toEmail = process.env.CONTACT_TO_EMAIL as string;
    const fromEmail = process.env.CONTACT_FROM_EMAIL as string;

    if (!toEmail || !fromEmail) {
      console.error("CONTACT_TO_EMAIL or CONTACT_FROM_EMAIL is not set");
      return NextResponse.json(
        { error: "Server email configuration error" },
        { status: 500 }
      );
    }

    await sendgrid.send({
      to: toEmail, // 宛先（Yuyaさん）
      from: fromEmail, // 送信元（SendGridで認証したアドレス）
      subject: `New contact from ${name} (${email})`,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,
      html: `
        <h2>New contact from portfolio site</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br/>")}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("SendGrid error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
