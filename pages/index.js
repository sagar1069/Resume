import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  const router=useRouter()
  return (
    <div class={styles.mainClass}>
      <div class="flex flex-wrap ">
        <div class="w-3/5">
          <div class="sm:flex sm:flex-wrap lg:flex lg:flex-nowrap lg:p-4 ">
            <div>
              <img class='sm:hidden lg:block sm:pl-4 lg:h-40 lg:w-44 lg:pl-0 ' src='/IMG20220225143435.jpg' alt='mainImage' />
            </div>
            <div class="lg:pl-4 sm:pt-4 mb-4 lg:pt-0">
              <div class='lg:text-3xl lg:text-slate-600 lg:pl-1 sm:text-xl sm:text-slate-600 sm:pl-1 sm:text-bold'>
                Sagar Khatri
              </div>
              <div class='lg:text-sm lg:text-slate-600 lg:p-1 sm:text-xs lg:pt-2 sm:text-slate-600 sm:p-1'>
                FrontEnd Developer
              </div>
              <div class='lg:text-sm text-slate-600 p-1  sm:text-xs'>
                Certified AWS Developer Associate
              </div>
              <div class='lg:text-sm text-slate-600 p-1  sm:text-xs'>
                Electronics and Communication Engineering
              </div>
              <div class='lg:text-sm text-slate-600 p-1 sm:text-xs'>
                Vellore Institute of Technology
              </div>
            </div>

          </div>
        </div>
        <div class="w-2/5 lg:pt-6 text-right sm:pt-4">
          <p class='whitespace-normal lg:text-sm sm:text-xs text-slate-600 p-1'>

            H .no 1/591, Jatwara, Sonepat
          </p>
          <div class='whitespace-normal lg:text-sm sm:text-xs text-slate-600 p-1'>
            Haryana -131001


          </div>
          <div class='whitespace-normal lg:text-sm sm:text-xs text-slate-600 p-1 break-all'>
            sagarkhatri9211@gmail.com

          </div>
          <div class='whitespace-normal lg:text-sm sm:text-xs text-slate-600 p-1'>
            8814051648
          </div>
          <div class='whitespace-normal lg:text-sm sm:text-xs p-1 text-blue-600/100 break-all'>
          <Link class='whitespace-normal lg:text-sm sm:text-xs text-blue-600/100 break-all'  target="_blank" href="https://www.linkedin.com/in/sagarkhatri9211/">www.linkedin.com/in/sagarkhatri9211</Link>
          </div>
        </div>

      </div>
      <div class="flex  ">
        <div class="w-3/5 lg:p-4 sm:pr-8">
          <div class='lg:text-lg lg:text-indigo-800 lg:font-bold lg:pb-4 sm:text-base sm:text-indigo-800 sm:font-bold sm:pb-4'>
            EXPERIENCE
          </div>
          <div class='lg:lg:text-base sm:text-sm sm:text-sm  text-slate-600 font-bold'>
            Stl Digital
          </div>
          <div class='lg:text-sm sm:text-xs text-slate-600 pt-2'>
            Jan 2022- PRESENT

          </div>
          <div class='lg:text-sm sm:text-xs text-slate-600 pb-6 pt-2'>
            Currently working as a frontend developer in Sterlite Technologies.
          </div>
          <div>

          </div>

          <div class='lg:text-base sm:text-sm  text-slate-600 font-bold'>
            Cognizant Technology Solutions, Location — Pune
          </div>
          <div class='lg:text-sm sm:text-xs text-slate-600 pt-2'>
            AUGUST 2021- Jan 2022
          </div>
          <div class='lg:text-sm sm:text-xs text-slate-600 pt-2'>
            Worked as a salesforce developer in Cognizant Technology Solutions for 6 months.
          </div>
          <div class='lg:text-lg sm:lg:text-base sm:text-sm text-indigo-800 font-bold pb-4 pt-4'>
          EDUCATION
            </div>
            <div>
              <ul>
                <li class='lg:text-sm sm:text-xs text-slate-600 pt-2'>
                ●	VIT UNIVERSITY, B. TECH, ECE (2017-2021)
                </li>
                <li class='lg:text-sm sm:text-xs text-slate-600 pt-2 pb-4'>
                ●	MM PUBLIC SCHOOL, DELHI (2016-2017)
                </li>
              </ul>
            </div>
            <div class='uppercase lg:text-lg sm:lg:text-base sm:text-sm text-indigo-800 font-bold pb-4 pt-4'>
              Projects
            </div>
            <div class='lg:text-base sm:text-sm  text-slate-600 font-bold'>
              MyTvs
            </div>
            <div className='lg:text-sm sm:text-xs text-slate-600 pb-4'>
              <ul  class="list-disc pl-4 pt-2">
                <li class="pb-2">
                    Jan 2023 - Present
                </li>
                <li class="pb-2">
                   
                <Link class='whitespace-normal lg:text-sm sm:text-xs text-blue-600/100 break-all'  target="_blank" href="https://new.mytvs.in/">https://new.mytvs.in</Link>  </li>        
                <li  class="pb-2">
                Currently working as a frontend developer in my tvs project. My Role is to understand figma designs and create components for the same in next js. I have worked mostly on the javascript part and the integration of API’s. Also we need to take care that all the website is responsive as per figma designs.
                </li>
                <li class="pb-2">
                 Also Made OTP login system, Integrated razorpay with the website                   
                </li>
                <li>
                  Created the Project in Nextjs and got Good understanding of react hooks like useEffect, useState, useContext etc. 
                </li>
              </ul>
         
              </div>
              <div class='lg:text-base sm:text-sm text-slate-600 font-bold'>
                Balco Medical Center
                </div>
                <div  className='lg:text-sm sm:text-xs text-slate-600 pt-4 pb-4'>
                <ul  class="list-disc pl-4 pt-2">
                <li class="pb-2">
                    July 2022 - Jan 2023
                </li>
                <li class="pb-2">
                  Technology Used: Angular, Angular Material, SpringBoot, Sql, AWS etc
                </li>
                <li  class="pb-2">
                Created a full stack Hospital Management App using Angular in frontend and Spring Boot  in the backend. The System consists of patients taking appointments and downloading the receipt. It also shows the home page with all the recent developments and news. We can also see Doctors with particular specializations. At last, I deployed the whole project on AWS  using ec2 & elastic beanstalk. 
                </li>
               
              </ul>
             
                </div>

        </div>
        <div class="w-2/5 lg:p-4 sm:pl-4 sm:pr-4">
          <div class='lg:text-lg sm:text-base text-indigo-800 font-bold pb-4'>
          SKILLS
          </div>
          <div  class='lg:text-sm sm:text-xs text-slate-600 pt-2'>
          React, Nextjs, AWS Web Services, Spring Boot, Angular, SQL, Jenkins, Salesforce, Aura, Lwc, Html, JS,  Java, C, and Python(Basic)
          </div>
          <div class='lg:text-lg sm:text-base text-indigo-800 font-bold pb-4 pt-6'>
          INTERNSHIP, TRAINING
            </div>
            <div>
              <div class='capitalize lg:text-base sm:text-sm  text-slate-600 font-bold'>
              Cognizant Technologies(3 months)
              </div>
              <div  class='lg:text-sm sm:text-xs text-slate-600 pt-2'>
              (07-06-2021)-(26-10-2021)
              </div>
              <div  class='lg:text-sm sm:text-xs text-slate-600 pt-2'>
              Medium- Online
              </div>
              <div  class='lg:text-sm sm:text-xs text-slate-600 pt-2'>
              Description: I learned about HTML, CSS, SQL, JS, and JAVA in this internship and passed all my exams with a good score.
              </div>
              <div class='lg:text-base sm:text-sm  text-slate-600 font-bold pt-6'>
              Sterlite  Technology:
                </div>
                <div class='lg:text-sm sm:text-xs text-slate-600 pt-2'>
              Medium- Offline
              </div>
                <div class='lg:text-sm sm:text-xs text-slate-600 pt-2'>
                Description: I learned about Angular, Spring boot,  AWS, JS, and Jenkins in this internship and passed all my exams with a good score.
                  </div>



            </div>
            <div class='lg:text-lg sm:text-base text-indigo-800 font-bold pb-4 pt-6'>
            CERTIFICATION
              </div>
              <div>
                <ul class='list-disc pl-4'>
                  <li class='lg:text-sm sm:text-xs text-slate-600 pt-2 font-bold break-all'>
                  AWS Certified Developer Associate:<br/>
                  Link:<Link class='whitespace-normal lg:text-sm sm:text-xs text-blue-600/100 break-all'  target="_blank" href="https://drive.google.com/file/d/1S5YcMn9ZsZWlPyrDuActdff0s-stsdxF/view"> https://drive.google.com/file/d/1S5YcMn9ZsZWlPyrDuActdff0s-stsdxF/view</Link>
                  </li>
                  <li class='lg:text-sm sm:text-xs text-slate-600 font-bold pt-2 break-all'>
                  Microservices:<br/>
                  Link:<Link class='whitespace-normal lg:text-sm sm:text-xs  text-blue-600/100 break-all'  target="_blank" href="https://drive.google.com/file/d/1KRk2oKqdRI9Nyp2_N6qBLB5zJh2obYkJ/view"> https://drive.google.com/file/d/1KRk2oKqdRI9Nyp2_N6qBLB5zJh2obYkJ/view</Link>
                  </li>
                  <li class='lg:text-sm sm:text-xs text-slate-600 font-bold pt-2 break-all'>
                  Kubernetes:<br/>
                  Link:<Link class='whitespace-normal lg:text-sm sm:text-xs font-bold text-blue-600/100 break-all'  target="_blank" href="https://drive.google.com/file/d/1cxOe99bplZGWhbrUzCluvugzIUDFKawR/view"> https://drive.google.com/file/d/1cxOe99bplZGWhbrUzCluvugzIUDFKawR/view</Link>
                  </li>
                  <li class='lg:text-sm sm:text-xs text-slate-600 font-bold pt-2'>
                  GoLang:<br/>                  Link:<Link class='whitespace-normal lg:text-sm sm:text-xs text-blue-600/100 break-all'  target="_blank" href="https://drive.google.com/file/d/1ETAB7rk1llPHZDeu8g5KgIWiA03HdFpN/view"> https://drive.google.com/file/d/1ETAB7rk1llPHZDeu8g5KgIWiA03HdFpN/view</Link>

                  
                  </li>
                </ul>
             


                </div>

                <div class='lg:text-lg sm:text-base text-indigo-800 font-bold pb-2 pt-6'>
                LANGUAGES
                </div>
                <div class='lg:text-sm sm:text-xs text-slate-600 pt-2'>
                English, Hindi, Haryanvi
                </div>



          <div>

          </div>
        </div>

      </div>
      {/* <div>
        Projects
      </div> */}
      <div>

      </div>
    </div>
  )
}
