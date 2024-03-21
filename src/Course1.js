import React from "react";

//rafc
// export const Course = () => {
//   return (
//     <div>Course</div>
//   );
// }

//ffc
function Course1({ image, title, description }) {
  //{title, description}= props demek ololduğu için direkt bu şekil yapabiliriz

  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={image} alt="Kurslarım" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{title}</p>
          </div>
        </div>
        <div className="content">{description}</div>
      </div>
    </div>
  );

  //   //   console.log(props);

  // //   const title = props.title;
  // //   const description = props.description;
  // //   const { title, description } = props; //üsttekiler gibi ayrı ayrı yapabiliriz ama bu şekilde tek satırda aynı şeyi yapıyoruz
  //   return (
  //     <div>
  //       <img src={image} alt="" />
  //       <div>{title}</div>
  //       <div>{description}</div>
  //     </div>
  //   );
}

export default Course1;
