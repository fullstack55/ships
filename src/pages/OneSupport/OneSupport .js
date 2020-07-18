import React from "react";
import { Row, Col } from "reactstrap";
import Header from "../../components/header/header";
import Footer from "../../components/common/footer/footer";
import PageTitle from "../../components/common/page-title/page-title";

import "./OneSupport.sass";

import AnchorContent from "./components/AnchorContent";

const OneSupport = () => {
  return (
    <>
      <Header info={false} />
      <Row className="justify-content-center OneSupport mb-5">
        <Col lg={10} sm={11} xs={11}>
          <PageTitle
            main={"PHOTO"}
            secondary={"MANIPULATION"}
            className={"OneSupport__title"}
          />
          <ul className="mt-4">
            <li>
              1.
              <a href="#section1" className="ml-4">
                Why manipulate
              </a>
            </li>
            <li className="mt-4">
              2.
              <a href="#section2" className="ml-4">
                Preparing for manipulating
              </a>
            </li>
            <li className="mt-4">
              3.
              <a href="#section3" className="ml-4">
                Programmes used by shipspotting members
              </a>
            </li>
            <li className="mt-4">
              4.
              <a href="#section4" className="ml-4">
                Prepare for submitting to shipspotting
              </a>
            </li>
            <li className="mt-4">
              5.
              <a href="#section5" className="ml-4">
                Upload image(s) selected
              </a>
            </li>
          </ul>
          <AnchorContent
            id={"section1"}
            mainTitle="1. WHY"
            subTitle="MANIPULATE"
            content={
              <>
                <p>
                  Most photos can be improved by cropping. Some need to have the
                  horizon leveled perhaps by checking vertical structures in the
                  background. Many can be improved by judicious use of a Sharpen
                  tool. The consequence of back lighting or a dull day can often
                  be remedied by tuning tools.
                </p>
                <p>
                  It may be necessary to resize your image to meet the site
                  standard of between 768 x 768 pixels and 4000 x 4000 pixels,
                  and the file size maximum is 4MB.
                </p>
                <p>
                  Practice and experimentation will provide opportunities for
                  developing a variety of combinations of the manipulation
                  tools.
                </p>
                <p>
                  Remember that Shipspotting photos are not meant to be creative
                  works of art, they should capture a realistic looking scene
                  dominated by a ship.
                </p>
              </>
            }
          />
          <AnchorContent
            id={"section2"}
            mainTitle="2. PREPARING"
            subTitle="FOR MANIPULATING"
            content={
              <>
                <p>
                  Manipulation (sometimes described as Editing or Enhancement)
                  is a routine process for most photographers. It is a follow on
                  to judgments made while taking the shot; such as for focus,
                  shutter speed and framing the shot. Many photographers believe
                  that they can use their camera at one of the Auto settings
                  because of the power of manipulation software.
                </p>
              </>
            }
          />
          <AnchorContent
            id={"section3"}
            mainTitle="3. PROGRAMMES"
            subTitle="USED BY SHIPSPOTTING MEMBERS"
            content={
              <>
                <p>
                  <strong>ADOBE PHOTOSHOP</strong>. Comes in several versions
                  (and prices) from elementary to advanced. For advanced
                  versions, buy a current textbook.
                </p>

                <p>
                  <strong>PICASA</strong>. Free from Google. Many popular
                  computer magazines consistently give this programme a very
                  high rating. Note that when you install Picasa, it makes
                  Google your default search engine. If you do not want it to do
                  that, make sure to uncheck the box next to that option when
                  installing.
                </p>
              </>
            }
          />
          <AnchorContent
            id={"section4"}
            mainTitle="4. PREPARE"
            subTitle="FOR SUBMITTING TO SHIPSPOTTING"
            content={
              <>
                <p>
                  Picasa is used here as an example. The principles are similar
                  for all manipulation programmes.
                </p>

                <ol>
                  <li>
                    <p>
                      From the series of images for a vessel, first identify a
                      number of Possibles from which to chose those ready for
                      uploading
                    </p>
                  </li>
                  <li>
                    <p>
                      Manipulate each Possible. Delete if not a semi finalist
                      candidate. See PICASA MANIPULATION TOOLS below.
                    </p>
                  </li>
                  <li>
                    <p>
                      When result of above is a possible for best choice, use
                      the Export button to send the image to the ex Manipulation
                      Program folder. These could be called semi-finalists.
                    </p>
                  </li>
                  <li>
                    <p>
                      Progressively reduce the images for the vessel to
                      semi-finalists and best choice. The best choice may be
                      selected by setting each of the semi finalists as Desktop
                      Background to look for blurry results, or unreal colours
                    </p>
                  </li>
                  <li>
                    <p>
                      When exporting, select Image Size Option – use Original
                      size unless outside site standard (4000 x 4000). If so,
                      reduce to say 3900. Minimum resolution allowed is 1024 x
                      768 pixels. Higher is better. Then Click OK
                    </p>
                  </li>
                </ol>
              </>
            }
          />
          <AnchorContent
            id={"section5"}
            mainTitle="5. UPLOAD"
            subTitle="IMAGE(S) SELECTED"
            content={
              <>
                <p>
                  Follow requirements on Upload a new photo page reached from
                  Add Photo tab after clicking My Photos on the Home page, On
                  the page reached from the Support tab on the Home page, also
                  see FAQs titled Uploading Photos (under the heading Using the
                  site and FAQ feedback),and Uploading photos guidance
                </p>
              </>
            }
          />
        </Col>
      </Row>

      <Footer />
    </>
  );
};

export default OneSupport;
