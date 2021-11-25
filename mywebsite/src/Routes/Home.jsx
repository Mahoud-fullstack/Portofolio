import React from 'react'
import myPhoto from '../images/me.jpg'

export default function Home() {
    return (
        <section>
            <section className='intro-sec'>
                <h1>Hey I am Mahmoud Saad </h1>
                <h3>I am a Graduate Software Developer at vanier college  </h3>
                <img src = {myPhoto} className='my-img' alt='myPhoto'/>
            </section>
            <section>
                <p>I take new adventure through getting out of my comfort zone. and return back to school to learn computer Science field . I have knowledge of both computer programming (.net , ASP.net , C#, Java, bootstrap , MVC, CSS, JavaScript , Html , Eclipse, Visual Studio, Php) and financial Accounting .
                   7 years of experience in accounting and finance: A/R, A/P, 
                   bank reconciliation, general ledger and financial Statements .</p>

                <p>Self-motivated and able to work independently and under pressure
                   Good interpersonal and organizational skills</p>
                <p> I'm constantly learning new technologies. currently working towards getting Certified by Microsoft in Cloud(Azure).</p>
            </section>
            <button>My CV</button>
        </section>
    )
}
