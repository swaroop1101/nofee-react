import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function InterviewRounds() {
  const { company, role } = useParams();
  const decodedCompany = decodeURIComponent(company);
  const decodedRole = decodeURIComponent(role);

  const [timer, setTimer] = useState(10);
  useEffect(() => {
    if (timer > 0) {
      const countdown = setTimeout(() => {
        setTimer(timer - 1);
      }, 1000);

      return () => clearTimeout(countdown); // Clean up on unmount
    }
  }, [timer]);

  let rounds = [];

  if (decodedCompany === 'Product Based') {
    if (decodedRole === 'Software Developer') {
      rounds = [
        'Online Assessment (OA)/Coding Test',
        'Technical Interview',
        'System Design',
        'HR & Behaviour Round',
      ];
    } else if (decodedRole === 'UI/UX Designer') {
      rounds = [
        'Online Portfolio Screening/Design Challenge',
        'UI & UX Conceptual Round',
        'Design Assessment (Practical Test)',
        'HR & Behaviour Round',
      ];
    } else if (decodedRole === 'Product Manager') {
      rounds = [
        'Resume & Application Screening',
        'Online Assessment',
        'Product Sense & Strategy Round',
        'Execution & Analytical Thinking Round',
        'Behavioral & Leadership Round',
        'Final Hiring Manager',
      ];
    } else if (decodedRole === 'DevOps Engineer') {
      rounds = [
        'Online Assessment',
        'Linux & System Administrator Round',
        'Cloud & Infrastructure Round',
        'Security & Monitoring Round',
        'HR & Behaviour Round',
      ];
    } else if (decodedRole === 'Quality Assurance(QA) Engineer') {
      rounds = [
        'Online Assessment/Coding Test',
        'Manual Testing & Test Case Writing Round',
        'Automation Testing Round',
        'Performance & Security Testing Round',
        'Behavioural & Problem Solving Round',
      ];
    }
    
  } 

  else if (company === 'Service Based') {
      if (decodedRole === 'Solution Architect') {
      rounds = [
        'Online Assessment (OA)',
        'Technical Round',
        'Managerial Round (Behaviour + Problem Solving)',
        'HR Round',
      ];
    } else if (decodedRole === 'Pre-Sales consultant') {
      rounds = [
        'Online Assessment (OA)/Coding Test',
        'Technical Round',
        'Business Case Study/Scenario Based Round',
        'Managerial Round (Soft Skills & Client Handling)',
        'HR Round',
      ];
    } else if (decodedRole === 'IT support Engineer') {
      rounds = [
        'Online Assessment (OA)/Coding Test',
        'Technical Round',
        'Managerial Round (Customer Handling & Soft Skills)',
        'HR & Behaviour Round',
      ];
    } else if (decodedRole === 'Cybersecurity Analyst') {
      rounds = [
        'Online Assessment (OA)/Coding Test',
        'Technical Round',
        'Scenario Based Problem Solving Round',
        'Managerial Round (Soft Skills & Team Work)',
        'HR Round',
      ];
    } else if (decodedRole === 'Database Administrator') {
      rounds = [
        'Online Assessment (OA)/Coding Test',
        'Technical Round',
        'Scenario Based Problem Solving Round',
        'Managerial Round (Soft Skills & Team Work)',
        'HR Round',
      ];
    }
  } 

  else if (company === 'StartUp') {
    if (decodedRole === 'Full Stack Developer') {
      rounds = [
        'Screening/Online Assessment (OA)',
        'Technical Round',
        'System Design Round',
        'HR/Cultural fit Round',
      ];
    } else if (decodedRole === 'DevOps Engineer') {
      rounds = [
        'Technical Screening/Online Assessment (OA)',
        'Technical Round',
        'System Design & Scaling Round',
        'HR/Cultural fit Round',
      ];
    } else if (decodedRole === 'Growth Engineer') {
      rounds = [
        'Technical Screening/Online Assessment (OA)',
        'Technical Round',
        'Growth and Marketing Automation Round',
        'System Design & Growth Strategy Round',
        'HR/Cultural fit Round',
      ];
    } else if (decodedRole === 'Cybersecurity Specialist') {
      rounds = [
        'Technical Screening/Online Assessment (OA)',
        'Technical Round',
        'System Design & Compliance Round',
        'HR/Cultural fit Round',
      ];
    } else if (decodedRole === 'Product Engineer') {
      rounds = [
        'Technical Screening/Online Assessment (OA)',
        'Technical Round',
        'Product Thinking and Business Impact Round',
        'HR/Cultural fit Round',
      ];
    }
  }

  return (
    <>
      <div className='mt-10 ml-22'>
        <div className='text-2xl'>
          <h1><u>Rounds for <strong>{company}</strong> company and selected role is <strong>{role}</strong></u></h1>
        </div>

        <div className='text-2xl font-extrabold mt-10'>
          {rounds.map((round, index) => (
            <h1 key={index}>Round {index + 1}: {round}</h1>
          ))}
        </div>
      </div>

      <div className='text-center text-9xl font-bold mt-20'>
        {timer > 0 ? `${timer}` : `${timer}`}
      </div>
    </>
  );
}

export default InterviewRounds;
