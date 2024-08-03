import Image from "next/image";
import Link from "next/link";
import thumb from "@/public/images/contact/thumb.png";
import mail from "@/public/images/contact/mail.png";
import phone from "@/public/images/contact/phone.png";
import discord from "@/public/images/contact/discord.svg";
import location from "@/public/images/contact/location.png";
import CommonBanner from "@/components/layout/banner/CommonBanner";

const ContactSection = () => {
  return (
    <div id="contact">
      <CommonBanner />
      <section className="section m-contact fade-wrapper">
        <div className="container">
          <div className="row gaper section pt-0">
            <div className="col-12 col-sm-6 col-lg-3">
              <div className="m-contact__single fade-top">
                <div className="thumb">
                  <Image src={mail} alt="Image" priority />
                </div>
                <div className="content">
                  <h3>Email</h3>
                  <p>
                    <Link href="mailto:zulhelmijohn0218@gmail.com">
                      zulhelmijohn0218@gmail.com
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-3">
              <div className="m-contact__single fade-top">
                <div className="thumb">
                  <Image src={phone} alt="Image" priority />
                </div>
                <div className="content">
                  <h3>Whatsapp</h3>
                  <p>
                    +1 (786) 794-9725
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-3">
              <div className="m-contact__single fade-top">
                <div className="thumb">
                  <Image src={discord} alt="Image" priority style={{ height: "80px", width: "80px" }} />
                </div>
                <div className="content">
                  <h3>Discord</h3>
                  <p>
                    @hightecular95908
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-3">
              <div className="m-contact__single fade-top">
                <div className="thumb">
                  <Image src={location} alt="Image" priority />
                </div>
                <div className="content">
                  <h3>Location</h3>
                  <p>
                    Manila, Philippines
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

  );
};

export default ContactSection;
