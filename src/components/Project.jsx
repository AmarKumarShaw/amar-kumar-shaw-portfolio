import ParlayeImage from "../assets/Parlaye.webp"
import ProductivityImage from "../assets/Productivity.webp"
import ResumAIImage from "../assets/Resumai.webp"
const Project = () => {
    // const data = [
    //     {title:"ResumAI",
            
    //         description:"ResumAI simplifies resume creation by automating writing, formatting, and optimization—all for free using trusted templates and smart feedback tools.",
    //         image:"URL_ADDRESSicsum.photos/200/300",
    //         link:"#",
    //     },
    //     {title:"ResumAI",
            
    //         description:"ResumAI simplifies resume creation by automating writing, formatting, and optimization—all for free using trusted templates and smart feedback tools.",
    //         image:"URL_ADDRESSicsum.photos/200/300",
    //         link:"#",
    //     },
    //     {title:"ResumAI",
            
    //         description:"ResumAI simplifies resume creation by automating writing, formatting, and optimization—all for free using trusted templates and smart feedback tools.",
    //         image:"URL_ADDRESSicsum.photos/200/300",
    //         link:"#",
    //     },
    // ]
//     https://ibb.co/yFntz7dq
// https://ibb.co/SwY9gjgq
// https://ibb.co/cczJfw6j

    const data = [
        {
          title: "ResumAI",
          description:
            "A dynamic AI-powered resume builder with live preview, smart suggestions, and one-click PDF/DOCX export.",
          image: ResumAIImage,
          link: "https://www.resumai.in"
        },
        {
          title: "Productivity SaaS – Landing Page",
          description:
            "A clean and animated landing page built using Next.js and Tailwind CSS, optimized for performance.",
          image: ProductivityImage,
          link: "https://www.productivitysaas.amarkumarshaw.com",
        },
        {
          title: "Parlaye – AI Game Chat Interface",
          description:
            "An interactive chat demo for conversation-first applications, featuring sleek UI and real-time responses.",
          image:ParlayeImage ,
          link: "https://parlaye.amarkumarshaw.com",
        },
      ];
  return (
    <div className="py-10 "
    >
        <h2 className="text-center py-10">My Projects</h2>
    <div className="flex gap-5 flex-wrap">
    {data.map((data)=>{
        return(
            <>
            <div
            onClick ={ () => {
                window.open(`${data.link}`, '_blank');
              }}
            className="card bg-base-100 w-72 shadow-sm border border-gray-700
            rounded-lg overflow-hidden hover:scale-105 duration-300 ease-in-out
            cursor-pointer
            ">
  <figure>
    <img
      src={data.image}
      alt="Shoes" />
  </figure>
  <div className="card-body p-4">
    <h2 className="card-title text-white text-2xl">{data.title}</h2>
    <p className="text-sm">{data.description}</p>
    <div className="card-actions justify-end">
      <button
      
      
      
      className="btn btn-primary text-sm rounded-full border border-white px-2 py-1 hover:bg-white hover:text-black duration-300 ease">More Info</button>
    </div>
  </div>
</div></>
        )
     })}
    </div>
    </div>
  )
}

export default Project