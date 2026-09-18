"use client";
import { FormEvent, useState } from "react";
import { services } from "@/lib/data";

export function ContactForm() {
  const [status, setStatus] = useState("");
  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setStatus("Thanks. Your enquiry is ready to send. We will get back to you shortly."); event.currentTarget.reset(); }
  return <form onSubmit={submit}><div className="form-grid"><div className="form-field"><label htmlFor="name">Name *</label><input id="name" name="name" required /></div><div className="form-field"><label htmlFor="company">Company / business name *</label><input id="company" name="company" required /></div><div className="form-field"><label htmlFor="email">Email *</label><input id="email" name="email" type="email" required /></div><div className="form-field"><label htmlFor="phone">Phone / WhatsApp number *</label><input id="phone" name="phone" required /></div><div className="form-field full"><label htmlFor="service">Service interested in</label><select id="service" name="service" defaultValue=""><option value="" disabled>Select a service</option>{services.map((service)=><option key={service.slug}>{service.title}</option>)}</select></div><div className="form-field full"><label htmlFor="message">Brief / message *</label><textarea id="message" name="message" required /></div></div><button className="button button-gold" type="submit" style={{marginTop:25}}>Send enquiry <span>↗</span></button>{status && <p className="form-message" role="status">{status}</p>}</form>;
}
