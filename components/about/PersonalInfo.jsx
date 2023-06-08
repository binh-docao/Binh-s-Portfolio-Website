import React from "react";

const PersonalInfo = () => {
  const personalInfoContent = [
    {
      id: 1,
      colClass: "left",
      info: [
        {
          id: 1,
          name: "Birthday",
          content: "January 24th",
        },
        {
          id: 2,
          name: "Age",
          content: "22",
        },
        {
          id: 3,
          name: "Address",
          content: "Cypress, TX",
        },
        {
          id: 4,
          name: "Email",
          content: (
            <>
              <a href="mailto:binhdocao@tamu.edu">binhdocao@tamu.edu</a>
            </>
          ),
        },
        {
          id: 5,
          name: "Phone",
          content: (
            <>
              <a href="tel:+281 804 2243">281-804-2243</a>
            </>
          ),
        },
      ],
    },
    {
      id: 2,
      colClass: "right",
      info: [
        {
          id: 1,
          name: "College",
          content: "Texas A&M University",
        },
        {
          id: 2,
          name: "Major",
          content: "Computer Science",
        },
        {
          id: 3,
          name: "Minor(s)",
          content: "Business, Mathematics",
        },
        {
          id: 4,
          name: "Graduation",
          content: "December 2023",
        },

      ],
    },
  ];
  return (
    <>
      {personalInfoContent.map((item) => (
        <div className={item.colClass} key={item.id}>
          <div className="tokyo_tm_info">
            <ul>
              {item?.info?.map((value) => (
                <li key={value.id}>
                  <span>{value.name}:</span>
                  <span>{value.content}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default PersonalInfo;
