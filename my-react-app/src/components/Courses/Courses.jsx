const courses = [
    {
        icon: "/components/C++.jpeg",
        title: "Learn C++",
        description: "Programming from basics to advanced topics, including variables, data types, loops, functions, arrays, pointers etc.",
      },
      {
        icon: "/components/c.png",
        title: "Learn C",
        description: "Programming from basics to advanced topics, including variables, data types, loops, functions, arrays, pointers etc.",
      },
      {
        icon: "/components/python.jpeg",
        title: "Learn Python",
        description: "Python syntax, data structures, functions, automation, data analysis, web development.",
      },
      {
        icon: "/components/java.png",
         title: "Learn Java",
        description: "Java syntax, OOP, and core features for web/software engineering and enterprise.",
      },
      {
        icon: "/components/html.png",
        title: "Learn HTML",
        description: "Intro to HTML, covering structure, elements, attributes, and real-world applications.",
      },
      {
        icon: "/components/css.png",
        title: "Learn CSS",
        description: "Styling, layouts, animations, and real-world applications using CSS.",
      },
      {
        icon: "/components/Javascript.png",
        title: "Learn JavaScript",
        description: "JS syntax, DOM, functions, events, frameworks, and real-world applications.",
      },
      {
        icon: "/components/mern.jpeg",
        title: "MERN Stack",
        description: "HTML, CSS, JS, and frameworks for building responsive web applications.",
      },
    ];
    
    export default function Courses() {
           return (
             <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 ">
               {courses.map((course, index) => (
                 <div
                   key={index}
                   className="w-full h-[300px] border rounded-xl p-4 flex flex-col items-center te xt-center shadow hover:shadow-lg transition"
                 >
                   <img src={course.icon} alt={course.title} className="w-16 h-20 mb-4 object-contain" />
                   <h2 className="font-bold text-lg">{course.title}</h2>
                   <p className="text-sm text-gray-600 mt-2 flex grow text-center">
                     {course.description}
                   </p>
                   <button className=" text-xl text-gray-600 hover:text-black ">→</button>
                 </div>
               ))}
             </main>
           );
         }