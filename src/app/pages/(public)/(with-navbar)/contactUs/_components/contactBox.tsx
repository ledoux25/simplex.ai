import InfoTile from '@/app/components/contactUsComponents/infoTile'
import ContactForm from '@/app/components/general-components/contactForm'
import IconBox from '@/app/components/general-components/iconBox'
import { Titles } from '@/app/components/general-components/Titles'
import { faFacebookF, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const ContactBox = () => {
  return (
    <main className="md:w-8/12 max-w-[1000px] w-10/12 text-center md:text-start m-auto relative">
        <div className="border border-khr overflow-hidden rounded-2xl flex md:flex-row flex-col ">
          <div className="md:w-5/12 bg-klightGrey md:p-12 py-12 flex flex-col justify-between items-center">
            <div>
              <Titles
                title="Contact Information"
                TitleStyle="!text-[30px] text-white"
                subtitleStyle="!text-[14px]"
                subTitle="Say something to start a live chat!"
              ></Titles>
            </div>

            <div className="py-10  ">
              <InfoTile  body="+237 690379063"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
</svg>
</InfoTile>
              <InfoTile  body="contac@chatbook.com">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
  <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
</svg>

              </InfoTile>
              <InfoTile  body="Doula, Cameroon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
</svg>

              </InfoTile>
            </div>

            <div>
              <div className="text-white flex  gap-5">
                <IconBox classname="!bg-black">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faFacebookF}
                      className="h-[18px]"
                      color="white"
                    />
                  </a>
                </IconBox>

                <IconBox classname="!bg-black">
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faTwitter} className="h-[18px]" />
                  </a>
                </IconBox>
                <IconBox classname="!bg-black">
                  <div>
                    {" "}
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={faLinkedinIn}
                        className="h-[18px]"
                      />
                    </a>
                  </div>
                </IconBox>
              </div>
            </div>
          </div>
          <div className="md:w-5/12 py-10 m-auto  pb-12">
            <div className="absolute md:scale-125 md:-bottom-5 -bottom-10 md:right-14 right-0">
            <svg
              width="266"
              height="217"
              viewBox="0 0 266 217"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <rect
                x="0.868347"
                y="119.496"
                width="240.788"
                height="112.305"
                transform="rotate(-29.7534 0.868347 119.496)"
                fill="url(#pattern0_1_787)"
              />
              <defs>
                <pattern
                  id="pattern0_1_787"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlinkHref="#image0_1_787"
                    transform="matrix(0.00156413 0 0 0.00334408 -0.141817 -0.0016116)"
                  />
                </pattern>
                <image
                  id="image0_1_787"
                  width="730"
                  height="300"
                  xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAtoAAAEsCAYAAAD9zRSqAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo3NzYxQ0U1NUM4QTNFQjExQUU3OEM1MTkxN0VFRTlBMCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5MUFFRUNFN0EzRDAxMUVCODBFQkY4QTEwOTJBNzdCOCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5MUFFRUNFNkEzRDAxMUVCODBFQkY4QTEwOTJBNzdCOCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjUyQTQ0NTQ5RDBBM0VCMTFBRTc4QzUxOTE3RUVFOUEwIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjc3NjFDRTU1QzhBM0VCMTFBRTc4QzUxOTE3RUVFOUEwIi8+IDwvcmRmOkRlc2NyaXB0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"
                />
              </defs>
            </svg>
            </div>

            <ContactForm hideTitle={true}></ContactForm>
          </div>
        </div>
        <div></div>
      </main>
  )
}
