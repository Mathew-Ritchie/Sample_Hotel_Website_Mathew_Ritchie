import { ContactData } from "../data/contactAndSocialData";

export default function ContactInfoComponent() {
    return (
        <div className=" flex flex-col justify-start items-start space-y-6  leading-relaxed">
          {ContactData && Object.entries(ContactData).map(([key, contact]) => (
            <div key={key} className=" flex justify-start items-center gap-2">
              <img src={contact.icon} className="w-10" />
              {contact.title === "Phone" ? (
                <p className="contact-details">{contact.info}</p>
              ) : contact.title === "Email" ? (
                <a className="contact-details" target="_blank" href={`mailto:${contact.info}`}>{contact.info}</a>
              ) : (
                <p className="contact-details">{contact.info}</p>
              )}
            </div>
          ))}
        </div>
    );
}