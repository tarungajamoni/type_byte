import { Footer, FooterDivider, FooterIcon } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsTwitter, BsGithub } from "react-icons/bs";

export default function FooterComp() {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                Type
              </span>
              Byte
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://tarungajamoni.github.io/Portfolio/"
                  target="_blank"
                >
                  Portfolio
                </Footer.Link>
                <Footer.Link href="/about" target="_blank">
                  Blog
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow Us" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://www.github.com/tarungajamoni"
                  target="_blank"
                >
                  GitHub
                </Footer.Link>
                <Footer.Link href="/about" target="_blank">
                  Blog
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms & Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <FooterDivider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="Type Byte"
            year={new Date().getFullYear()}
          />
        </div>
        <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
          <Footer.Icon
            href="https://facebook.com"
            target="_blank"
            icon={BsFacebook}
          />
          <Footer.Icon
            href="https://instagram.com"
            target="_blank"
            icon={BsInstagram}
          />
          <Footer.Icon
            href="https://twitter.com"
            target="_blank"
            icon={BsTwitter}
          />
          <Footer.Icon
            href="https://github.com"
            target="_blank"
            icon={BsGithub}
          />
        </div>
      </div>
    </Footer>
  );
}
