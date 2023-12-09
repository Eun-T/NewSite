import { NextResponse } from "next/server";
import { Resend } from "resend";
import * as React from "react";


const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: any) {
  try {
    const body = await request.json();
    console.log(body);
    const { senderEmail, message, number, content, marketing, problem, consultent, company, location, website, budget } = body;

    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: "venzire329@gmail.com",
      subject: "Hello world",
      html: `
    보낸 사람: ${company}<br />
    연락처: ${number}<br />
    이메일: ${senderEmail}<br />
    1. ${marketing}<br />
    2. ${budget}<br />
    3. ${content}<br /> 
    4. ${problem}<br />
    5. ${consultent}<br />
    자세한 상담을 위해 1분만 투자해주세요.<br />
    회사명 / 성함 : ${company}<br />
    연락처 : ${number}<br />
    이메일 : ${senderEmail}<br />
    지역 : ${location}<br />
    사이트주소 : ${website}<br />
    `,
      reply_to: senderEmail as string,
      text: message as string,
    });

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error });
  }
}

// const data = await resend.emails.send({
//   from: "Acme <onboarding@resend.dev>",
//   to: "venzire329@gmail.com",
//   subject: "Hello world",
//   // react: EmailTemplate() as React.ReactElement,
//   html: `
// 보낸 사람: ${company}<br />
// 연락처: ${number}<br />
// 이메일: ${senderEmail}<br />
// 문의 내용: ${content} 어떤 마케팅상품 ${marketing} 문제 ${problem} 상담 ${consultent}
// `,