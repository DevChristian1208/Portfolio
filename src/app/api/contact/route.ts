import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const { name, email, phone, message } = data;
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Bitte alle Pflichtfelder ausfüllen." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,        
      port: Number(process.env.SMTP_PORT), 
      secure: process.env.SMTP_SECURE === "true",  
      auth: {
        user: process.env.SMTP_USER,     
        pass: process.env.SMTP_PASS,      
      },
    });

    const mailOptions = {
      from: process.env.SMTP_USER,     
      replyTo: email,                 
      to: process.env.SMTP_USER,       
      subject: `Neue Nachricht von ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`, 
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { message: "Mail erfolgreich gesendet!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Fehler beim Verarbeiten:", error);
    return NextResponse.json(
      { error: "Fehler beim Verarbeiten der Anfrage. Bitte versuche es später erneut." },
      { status: 500 }
    );
  }
}
