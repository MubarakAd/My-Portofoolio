export default function ResumeContent() {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white text-black">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2">Mubarak Adem</h1>
        <p className="text-xl mb-4">Software Developer</p>

        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <div className="flex items-center gap-1">
            <span className="font-medium">Email:</span>
            <a href="mailto:mubarak.adem@a2sv.org" className="text-blue-600">
              mubarak.adem@a2sv.org
            </a>
          </div>
          <div className="flex items-center gap-1">
            <span className="font-medium">Phone:</span>
            <span>+251909230572</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="font-medium">Location:</span>
            <span>Adama, Ethiopia</span>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-4 text-sm">
          <a href="https://github.com/MubarakAdem" target="_blank" rel="noopener noreferrer" className="text-blue-600">
            GitHub: MubarakAdem
          </a>
          <a
            href="https://linkedin.com/in/MubarakAdem"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600"
          >
            LinkedIn: MubarakAdem
          </a>
          <a href="https://twitter.com/Mubarakadem" target="_blank" rel="noopener noreferrer" className="text-blue-600">
            Twitter: Mubarakadem
          </a>
        </div>
      </header>

      <section className="mb-6">
        <h2 className="text-xl font-bold border-b-2 border-gray-300 pb-1 mb-3">Profile</h2>
        <p className="text-sm">
          Ambitious and self-taught software developer, recognized as a top student for exceptional problem-solving and
          web development skills. Passionate about leveraging diverse technologies to create innovative solutions and
          drive impactful change in the tech industry.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-bold border-b-2 border-gray-300 pb-1 mb-3">Education</h2>

        <div className="mb-4">
          <div className="flex justify-between">
            <h3 className="font-semibold">Bsc. in Computer Science And Engineering</h3>
            <span className="text-sm">2022 – present</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="italic">Adama Science and Technology University</span>
            <span>Adama, Ethiopia</span>
          </div>
          <ul className="list-disc list-inside text-sm mt-1">
            <li>
              Relevant Courseworks: Fundamentals of Programming, Data Structures and Algorithms, Object
              Oriented-Programming, Software Engineering, Database Systems and Advanced Programming.
            </li>
          </ul>
        </div>

        <div>
          <div className="flex justify-between">
            <h3 className="font-semibold">Data Structures and Algorithms</h3>
            <span className="text-sm">2023 – present</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="italic">A2SV - Africa to Silicon Valley Coding Academy</span>
            <span>Adama, Ethiopia</span>
          </div>
          <ul className="list-disc list-inside text-sm mt-1">
            <li>
              A2SV upskills talented African students and connects them with big tech companies. A2SV has successfully
              placed 50+ trainees at top tech companies including Databricks, Google, Amazon, Bloomberg, Palantir, and
              Block.
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-bold border-b-2 border-gray-300 pb-1 mb-3">Professional Experience</h2>

        <div>
          <div className="flex justify-between">
            <h3 className="font-semibold">Software Engineer</h3>
            <span className="text-sm">Adama, Ethiopia</span>
          </div>
          <div className="text-sm italic">Eskalate</div>
          <ul className="list-disc list-inside text-sm mt-1">
            <li>
              Developed and maintained a comprehensive banking statistics dashboard as part of a team of six students.
              Leveraged Next.js, Tailwind CSS, React Toolkit, and NextAuth to create a seamless, user-friendly
              experience, enhancing data visualization and security for end-users.
            </li>
            <li>
              Developed Job Bridge, a platform connecting employees and employers, as part of an eight-member team.
              Utilized React and Tailwind CSS for a responsive and intuitive front-end, while leveraging Django for a
              robust and scalable back-end, ensuring a seamless user experience and efficient matchmaking.
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-bold border-b-2 border-gray-300 pb-1 mb-3">Skills</h2>

        <div className="text-sm">
          <p>
            <span className="font-semibold">Advanced —</span> NextJs, Python, React, Javascript
          </p>
          <p>
            <span className="font-semibold">Intermediate —</span> Java, Django, C++
          </p>
          <p>
            <span className="font-semibold">Beginner —</span> Go
          </p>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-bold border-b-2 border-gray-300 pb-1 mb-3">Projects</h2>

        <div>
          <h3 className="font-semibold">E-commerce</h3>
          <p className="text-sm">
            Created a dynamic e-commerce website using Django and React, designed to simplify the shopping experience
            for customers. Implemented features such as real-time inventory management, secure payment processing.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold border-b-2 border-gray-300 pb-1 mb-3">Organizations</h2>

        <div>
          <div className="flex justify-between">
            <h3 className="font-semibold">Instructor</h3>
            <span className="text-sm">Adama, Ethiopia</span>
          </div>
          <div className="text-sm italic">Andalus</div>
          <p className="text-sm mt-1">
            Volunteered at Andalus Organization, teaching programming and other subjects for free. Dedicated to
            empowering students with essential coding skills and knowledge.
          </p>
        </div>
      </section>
    </div>
  )
}
