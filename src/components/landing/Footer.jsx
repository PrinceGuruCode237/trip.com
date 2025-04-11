import Button from "../ui/Button";

function Footer() {
  return (
    <footer className="mx-4 sm:mx-6 md:px-0 lg:mx-14 pt-16 md:pt-24">
      <div className="flex-col md:flex-row md:gap-7 md:my-24 flex md:justify-between">
        <div className="flex  md:justify-between sm:justify-between">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4 md:gap-8">
              <a href="#">
                <h1 className="text-2xl md:text-4xl font-bold">
                  Tripy
                  <span className="text-xl md:text-2xl text-primary">.com</span>
                </h1>
              </a>
              <h1 className="font-bold md:w-1/2  text-3xl md:text-4xl">
                Extraordinary Tour Services!
              </h1>
              <Button title="Help center" className={"text-white w-fit"} />
            </div>
            <div className="md:hidden">
              <div className="flex flex-col">
                <h2 className="font-semibold md:text-2xl text-xl mb-10">
                  Contact Us
                </h2>
                <div className="flex flex-col gap-2">
                  <p>Tripy@business.com</p>
                  <p>+237 6910 404 207</p>
                </div>
              </div>

              {/* Insta */}
              <div className="flex md:gap-4 gap-2 my-4">
                <a href="#insta">
                  <span className="bg-neutral-black_500 flex justify-center items-center cursor-pointer p-2 rounded-full">
                    <svg
                      className="w-[18px] h-[18px] md:w-6 md:h-6"
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.1835 7.29249C10.4211 7.29249 7.3863 10.3273 7.3863 14.0897C7.3863 17.8521 10.4211 20.8869 14.1835 20.8869C17.9459 20.8869 20.9807 17.8521 20.9807 14.0897C20.9807 10.3273 17.9459 7.29249 14.1835 7.29249ZM14.1835 18.5087C11.7521 18.5087 9.76442 16.527 9.76442 14.0897C9.76442 11.6524 11.7462 9.67062 14.1835 9.67062C16.6208 9.67062 18.6025 11.6524 18.6025 14.0897C18.6025 16.527 16.6148 18.5087 14.1835 18.5087ZM22.8441 7.01445C22.8441 7.8959 22.1342 8.59987 21.2587 8.59987C20.3773 8.59987 19.6733 7.88998 19.6733 7.01445C19.6733 6.13892 20.3832 5.42903 21.2587 5.42903C22.1342 5.42903 22.8441 6.13892 22.8441 7.01445ZM27.346 8.62353C27.2454 6.49978 26.7603 4.61858 25.2045 3.06865C23.6546 1.51873 21.7734 1.03364 19.6496 0.927157C17.4608 0.802927 10.9002 0.802927 8.71142 0.927157C6.59359 1.02772 4.71238 1.51282 3.15654 3.06274C1.60071 4.61266 1.12153 6.49387 1.01505 8.61762C0.890817 10.8064 0.890817 17.367 1.01505 19.5558C1.11562 21.6796 1.60071 23.5608 3.15654 25.1107C4.71238 26.6606 6.58767 27.1457 8.71142 27.2522C10.9002 27.3764 17.4608 27.3764 19.6496 27.2522C21.7734 27.1516 23.6546 26.6665 25.2045 25.1107C26.7544 23.5608 27.2395 21.6796 27.346 19.5558C27.4702 17.367 27.4702 10.8124 27.346 8.62353ZM24.5183 21.9044C24.0568 23.0639 23.1636 23.9571 21.9982 24.4245C20.253 25.1166 16.112 24.9569 14.1835 24.9569C12.255 24.9569 8.10802 25.1107 6.36879 24.4245C5.20931 23.963 4.31603 23.0698 3.84869 21.9044C3.15654 20.1592 3.31627 16.0182 3.31627 14.0897C3.31627 12.1611 3.16246 8.01421 3.84869 6.27498C4.31011 5.1155 5.20339 4.22222 6.36879 3.75488C8.11393 3.06274 12.255 3.22246 14.1835 3.22246C16.112 3.22246 20.2589 3.06865 21.9982 3.75488C23.1577 4.21631 24.0509 5.10958 24.5183 6.27498C25.2104 8.02013 25.0507 12.1611 25.0507 14.0897C25.0507 16.0182 25.2104 20.1651 24.5183 21.9044Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </a>

                {/* X */}
                <a href="#insta">
                  <span className="bg-neutral-black_500 flex justify-center items-center cursor-pointer p-2 rounded-full inline-block">
                    <svg
                      className="w-[18px] h-[18px] md:w-6 md:h-6"
                      viewBox="0 0 31 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M27.1751 6.92173C27.1944 7.19078 27.1944 7.45988 27.1944 7.72893C27.1944 15.9352 20.9483 25.3908 9.53244 25.3908C6.01542 25.3908 2.74827 24.3722 0 22.6042C0.499702 22.6618 0.980119 22.681 1.49905 22.681C4.40101 22.681 7.07244 21.7009 9.20572 20.0289C6.47667 19.9712 4.18964 18.1839 3.40167 15.7239C3.78607 15.7815 4.17042 15.8199 4.57405 15.8199C5.13137 15.8199 5.68875 15.743 6.20762 15.6086C3.36327 15.032 1.22994 12.5336 1.22994 9.51626V9.43941C2.05631 9.90066 3.01732 10.1889 4.03583 10.2273C2.36381 9.11263 1.26839 7.21 1.26839 5.05751C1.26839 3.90441 1.57583 2.84739 2.11399 1.92489C5.16976 5.69173 9.76304 8.15167 14.9136 8.42078C14.8175 7.95953 14.7598 7.47911 14.7598 6.99864C14.7598 3.57768 17.5273 0.791016 20.9674 0.791016C22.7548 0.791016 24.3691 1.54054 25.503 2.75131C26.906 2.48227 28.2513 1.96334 29.4429 1.25227C28.9816 2.69369 28.0014 3.90447 26.7138 4.67316C27.963 4.53869 29.1738 4.19268 30.2885 3.71227C29.443 4.94221 28.3859 6.03762 27.1751 6.92173V6.92173Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </a>

                {/* Facebook */}
                <a href="#insta">
                  <span className="bg-neutral-black_500 flex justify-center items-center cursor-pointer p-2 rounded-full inline-block">
                    <svg
                      className="w-[18px] h-[18px] md:w-6 md:h-6"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M29.7757 15.1808C29.7757 7.07624 23.2092 0.509766 15.1046 0.509766C7.00006 0.509766 0.433594 7.07624 0.433594 15.1808C0.433594 22.5033 5.79858 28.5728 12.8123 29.6744V19.4218H9.08536V15.1808H12.8123V11.9484C12.8123 8.27181 15.0011 6.24093 18.3535 6.24093C19.9591 6.24093 21.638 6.52726 21.638 6.52726V10.1359H19.7875C17.9655 10.1359 17.397 11.2669 17.397 12.427V15.1808H21.4658L20.8151 19.4218H17.397V29.6744C24.4107 28.5728 29.7757 22.5033 29.7757 15.1808Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 hidden">
            <div className="flex flex-col">
              <h2 className="font-semibold md:text-2xl text-xl mb-10">
                Contact Us
              </h2>
              <div className="flex flex-col gap-2">
                <p>Tripy@business.com</p>
                <p>+237 6910 404 207</p>
              </div>
            </div>

            {/* Insta */}
            <div className="flex md:gap-4 gap-2 my-4">
              <a href="#insta">
                <span className="bg-neutral-black_500 flex justify-center items-center cursor-pointer p-2 rounded-full">
                  <svg
                    className="w-[18px] h-[18px] md:w-6 md:h-6"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.1835 7.29249C10.4211 7.29249 7.3863 10.3273 7.3863 14.0897C7.3863 17.8521 10.4211 20.8869 14.1835 20.8869C17.9459 20.8869 20.9807 17.8521 20.9807 14.0897C20.9807 10.3273 17.9459 7.29249 14.1835 7.29249ZM14.1835 18.5087C11.7521 18.5087 9.76442 16.527 9.76442 14.0897C9.76442 11.6524 11.7462 9.67062 14.1835 9.67062C16.6208 9.67062 18.6025 11.6524 18.6025 14.0897C18.6025 16.527 16.6148 18.5087 14.1835 18.5087ZM22.8441 7.01445C22.8441 7.8959 22.1342 8.59987 21.2587 8.59987C20.3773 8.59987 19.6733 7.88998 19.6733 7.01445C19.6733 6.13892 20.3832 5.42903 21.2587 5.42903C22.1342 5.42903 22.8441 6.13892 22.8441 7.01445ZM27.346 8.62353C27.2454 6.49978 26.7603 4.61858 25.2045 3.06865C23.6546 1.51873 21.7734 1.03364 19.6496 0.927157C17.4608 0.802927 10.9002 0.802927 8.71142 0.927157C6.59359 1.02772 4.71238 1.51282 3.15654 3.06274C1.60071 4.61266 1.12153 6.49387 1.01505 8.61762C0.890817 10.8064 0.890817 17.367 1.01505 19.5558C1.11562 21.6796 1.60071 23.5608 3.15654 25.1107C4.71238 26.6606 6.58767 27.1457 8.71142 27.2522C10.9002 27.3764 17.4608 27.3764 19.6496 27.2522C21.7734 27.1516 23.6546 26.6665 25.2045 25.1107C26.7544 23.5608 27.2395 21.6796 27.346 19.5558C27.4702 17.367 27.4702 10.8124 27.346 8.62353ZM24.5183 21.9044C24.0568 23.0639 23.1636 23.9571 21.9982 24.4245C20.253 25.1166 16.112 24.9569 14.1835 24.9569C12.255 24.9569 8.10802 25.1107 6.36879 24.4245C5.20931 23.963 4.31603 23.0698 3.84869 21.9044C3.15654 20.1592 3.31627 16.0182 3.31627 14.0897C3.31627 12.1611 3.16246 8.01421 3.84869 6.27498C4.31011 5.1155 5.20339 4.22222 6.36879 3.75488C8.11393 3.06274 12.255 3.22246 14.1835 3.22246C16.112 3.22246 20.2589 3.06865 21.9982 3.75488C23.1577 4.21631 24.0509 5.10958 24.5183 6.27498C25.2104 8.02013 25.0507 12.1611 25.0507 14.0897C25.0507 16.0182 25.2104 20.1651 24.5183 21.9044Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </a>

              {/* X */}
              <a href="#insta">
                <span className="bg-neutral-black_500 flex justify-center items-center cursor-pointer p-2 rounded-full inline-block">
                  <svg
                    className="w-[18px] h-[18px] md:w-6 md:h-6"
                    viewBox="0 0 31 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M27.1751 6.92173C27.1944 7.19078 27.1944 7.45988 27.1944 7.72893C27.1944 15.9352 20.9483 25.3908 9.53244 25.3908C6.01542 25.3908 2.74827 24.3722 0 22.6042C0.499702 22.6618 0.980119 22.681 1.49905 22.681C4.40101 22.681 7.07244 21.7009 9.20572 20.0289C6.47667 19.9712 4.18964 18.1839 3.40167 15.7239C3.78607 15.7815 4.17042 15.8199 4.57405 15.8199C5.13137 15.8199 5.68875 15.743 6.20762 15.6086C3.36327 15.032 1.22994 12.5336 1.22994 9.51626V9.43941C2.05631 9.90066 3.01732 10.1889 4.03583 10.2273C2.36381 9.11263 1.26839 7.21 1.26839 5.05751C1.26839 3.90441 1.57583 2.84739 2.11399 1.92489C5.16976 5.69173 9.76304 8.15167 14.9136 8.42078C14.8175 7.95953 14.7598 7.47911 14.7598 6.99864C14.7598 3.57768 17.5273 0.791016 20.9674 0.791016C22.7548 0.791016 24.3691 1.54054 25.503 2.75131C26.906 2.48227 28.2513 1.96334 29.4429 1.25227C28.9816 2.69369 28.0014 3.90447 26.7138 4.67316C27.963 4.53869 29.1738 4.19268 30.2885 3.71227C29.443 4.94221 28.3859 6.03762 27.1751 6.92173V6.92173Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </a>

              {/* Facebook */}
              <a href="#insta">
                <span className="bg-neutral-black_500 flex justify-center items-center cursor-pointer p-2 rounded-full inline-block">
                  <svg
                    className="w-[18px] h-[18px] md:w-6 md:h-6"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M29.7757 15.1808C29.7757 7.07624 23.2092 0.509766 15.1046 0.509766C7.00006 0.509766 0.433594 7.07624 0.433594 15.1808C0.433594 22.5033 5.79858 28.5728 12.8123 29.6744V19.4218H9.08536V15.1808H12.8123V11.9484C12.8123 8.27181 15.0011 6.24093 18.3535 6.24093C19.9591 6.24093 21.638 6.52726 21.638 6.52726V10.1359H19.7875C17.9655 10.1359 17.397 11.2669 17.397 12.427V15.1808H21.4658L20.8151 19.4218H17.397V29.6744C24.4107 28.5728 29.7757 22.5033 29.7757 15.1808Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="flex w-full md:w-[60%] justify-between my-24 md:my-0">
          <div className="xxs:w-1/3 w-full">
            <h2 className="font-semibold md:text-2xl text-sm  sm:text-xl mb-10">
              Features
            </h2>
            <ul className="flex flex-col gap-6">
              <li>
                <a href="#" className="text-base md:text-lg">
                  Home
                </a>
              </li>

              <li>
                <a href="#" className="text-base md:text-lg">
                  About
                </a>
              </li>

              <li>
                <a href="#" className="text-base md:text-lg">
                  Service
                </a>
              </li>

              <li>
                <a href="#" className="text-base md:text-lg">
                  Booking
                </a>
              </li>
            </ul>
          </div>

          <div className="xxs:w-1/3 w-full">
            <h2 className="font-semibold md:text-2xl text-sm sm:text-xl mb-10">
              Open trip
            </h2>
            <ul className="flex flex-col gap-6">
              <li>
                <a href="#" className="text-base md:text-lg">
                  Bali island
                </a>
              </li>

              <li>
                <a href="#" className="text-base md:text-lg">
                  Padar island
                </a>
              </li>

              <li>
                <a href="#" className="text-base md:text-lg">
                  Sumba island
                </a>
              </li>

              <li>
                <a href="#" className="text-base md:text-lg">
                  Philippines island
                </a>
              </li>
            </ul>
          </div>

          <div className="xxs:w-1/3 w-full">
            <h2 className="font-semibold md:text-2xl text-sm sm:text-xl mb-10">
              Ressources
            </h2>
            <ul className="flex flex-col gap-6">
              <li>
                <a href="#" className="text-base md:text-lg">
                  Guides
                </a>
              </li>

              <li>
                <a href="#" className="text-base md:text-lg">
                  Partners Network
                </a>
              </li>

              <li>
                <a href="#" className="text-base md:text-lg">
                  Developers
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="py-6 border-t-2 border-black">
        <div className="flex justify-between items-center">
          <h5>&copy; 2023 tripy.com, We lover our users!</h5>
          <p>Cameroon</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
