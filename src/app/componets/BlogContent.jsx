import React from "react";

const BlogContent = ({ data }) => {
  return (
    <div className="main-container">
      <div className="blog-content-main-section" style={{ color: "white" }}>
        {data?.content && (
          <>
            <div
              dangerouslySetInnerHTML={{ __html: data?.content }}
              style={{ color: "white" }}
              className="blog-content-main-section-content"
            ></div>
          </>
        )}
        {/* <div className="blog-content-main-section-content">
          <div className="blog-content-heading-box">
            <h4 className="blog-content-heading-text">
              Overview: Applications of Coaching
            </h4>
            <p className="blog-content-para-text">
              Coaching has emerged as an invaluable resource for individuals and
              organizations committed to growth, clarity, and a greater sense of
              purpose. Its influence spans across diverse fields, each with
              distinct needs and goals, covering various life aspects from
              personal growth and career advancement to enhanced health,
              financial wellness, and overall life satisfaction. Coaching acts
              as a guiding hand, helping people recognize their potential,
              overcome obstacles, and achieve goals that might have felt
              unreachable. But where exactly does coaching fit into this broad
              spectrum, and what tangible impact does it make? Let’s dive deeper
              into the unique areas where coaching plays a transformative role
              in fostering growth and driving change.
            </p>
          </div>

          <div className="blog-content-heading-box">
            <h4 className="blog-content-heading-text">
              Personal Development Coaching
            </h4>
            <p className="blog-content-para-text">
              Personal development coaching is focused on empowering individuals
              to realize their fullest potential, achieve unique aspirations,
              and find fulfilment across multiple life domains. Often customized
              to suit each individual, this type of coaching encourages growth
              in areas that lead to overall life satisfaction, well-being, and
              resilience. Key areas within personal development coaching
              include:
            </p>

            <ul>
              <li>
                <p className="blog-content-para-text">
                  <span style={{ fontWeight: "550" }}>Career Coaching:</span>
                  Career coaching is essential for individuals navigating
                  complex career paths, whether early, mid-career, or during
                  significant transitions. It helps individuals identify
                  professional strengths, define career trajectories, and make
                  informed decisions that align with their aspirations. Career
                  coaching provides valuable tools for both immediate job
                  success and long-term career growth, including insights into
                  effective job searching, professional networking, and ongoing
                  skill development.
                </p>
              </li>

              <li>
                <p className="blog-content-para-text">
                  <span style={{ fontWeight: "550" }}>Life Coaching:</span> Life
                  coaching is dedicated to enhancing personal well-being by
                  helping individuals define and pursue life goals that resonate
                  with their core values. Often, it emphasizes finding the right
                  work-life balance, cultivating satisfaction, and fostering
                  self-improvement. This approach encourages individuals to
                  assess their lives holistically, recognize areas for growth,
                  and align their actions with what truly matters to them. By
                  focusing on self-awareness and personal growth, life coaching
                  helps people create meaningful lives with a strong sense of
                  purpose.
                </p>
              </li>
            </ul>
          </div>

          <div className="blog-content-heading-box">
            <h4 className="blog-content-heading-text">
              Coaching Across Dimensions of Life
            </h4>
            <p className="blog-content-para-text">
              Personal development coaching is focused on empowering individuals
              to realize their fullest potential, achieve unique aspirations,
              and find fulfilment across multiple life domains. Often customized
              to suit each individual, this type of coaching encourages growth
              in areas that lead to overall life satisfaction, well-being, and
              resilience. Key areas within personal development coaching
              include:
            </p>

            <ul>
              <li>
                <p className="blog-content-para-text">
                  <span style={{ fontWeight: "550" }}>Career Coaching:</span>
                  Career coaching is essential for individuals navigating
                  complex career paths, whether early, mid-career, or during
                  significant transitions. It helps individuals identify
                  professional strengths, define career trajectories, and make
                  informed decisions that align with their aspirations. Career
                  coaching provides valuable tools for both immediate job
                  success and long-term career growth, including insights into
                  effective job searching, professional networking, and ongoing
                  skill development.
                </p>
              </li>

              <li>
                <p className="blog-content-para-text">
                  <span style={{ fontWeight: "550" }}>Life Coaching:</span> Life
                  coaching is dedicated to enhancing personal well-being by
                  helping individuals define and pursue life goals that resonate
                  with their core values. Often, it emphasizes finding the right
                  work-life balance, cultivating satisfaction, and fostering
                  self-improvement. This approach encourages individuals to
                  assess their lives holistically, recognize areas for growth,
                  and align their actions with what truly matters to them. By
                  focusing on self-awareness and personal growth, life coaching
                  helps people create meaningful lives with a strong sense of
                  purpose.
                </p>
              </li>
            </ul>
          </div>

          <div className="blog-content-heading-box">
            <h4 className="blog-content-heading-text">
              Coaching for Different Roles and Professions
            </h4>
            <p className="blog-content-para-text">
              Personal development coaching is focused on empowering individuals
              to realize their fullest potential, achieve unique aspirations,
              and find fulfilment across multiple life domains. Often customized
              to suit each individual, this type of coaching encourages growth
              in areas that lead to overall life satisfaction, well-being, and
              resilience. Key areas within personal development coaching
              include:
            </p>

            <ul>
              <li>
                <p className="blog-content-para-text">
                  <span style={{ fontWeight: "550" }}>Career Coaching:</span>
                  Career coaching is essential for individuals navigating
                  complex career paths, whether early, mid-career, or during
                  significant transitions. It helps individuals identify
                  professional strengths, define career trajectories, and make
                  informed decisions that align with their aspirations. Career
                  coaching provides valuable tools for both immediate job
                  success and long-term career growth, including insights into
                  effective job searching, professional networking, and ongoing
                  skill development.
                </p>
              </li>

              <li>
                <p className="blog-content-para-text">
                  <span style={{ fontWeight: "550" }}>Life Coaching:</span> Life
                  coaching is dedicated to enhancing personal well-being by
                  helping individuals define and pursue life goals that resonate
                  with their core values. Often, it emphasizes finding the right
                  work-life balance, cultivating satisfaction, and fostering
                  self-improvement. This approach encourages individuals to
                  assess their lives holistically, recognize areas for growth,
                  and align their actions with what truly matters to them. By
                  focusing on self-awareness and personal growth, life coaching
                  helps people create meaningful lives with a strong sense of
                  purpose.
                </p>
              </li>
            </ul>
          </div>

          <div className="blog-content-heading-box">
            <h4 className="blog-content-heading-text">Conclusion</h4>
            <p className="blog-content-para-text">
              Coaching offers customized support across various fields,
              encompassing personal growth, professional development, and
              holistic well-being. Whether you’re seeking to excel in your
              career, grow as a leader, or achieve a greater sense of balance,
              coaching provides the guidance, tools, and strategies necessary
              for meaningful change. By harnessing the benefits of coaching,
              individuals and organizations alike can overcome challenges, set
              clear and inspiring goals, and create a path to sustainable
              success. As coaching continues to evolve, its positive impact on
              both personal and professional lives becomes evident, proving its
              value as a vital resource for growth, achievement, and fulfilment.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default BlogContent;
