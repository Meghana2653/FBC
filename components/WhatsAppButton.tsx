const whatsappNumber = "91XXXXXXXXXX"; // Replace before launch with the client's WhatsApp number.

export function WhatsAppButton() {
  const message = encodeURIComponent("Hi FBC IT, I would like to discuss a project.");
  return <a className="whatsapp-button" href={`https://wa.me/${whatsappNumber}?text=${message}`} target="_blank" rel="noreferrer" aria-label="Chat with FBC IT on WhatsApp"><span>◔</span><b>Chat with us</b></a>;
}
