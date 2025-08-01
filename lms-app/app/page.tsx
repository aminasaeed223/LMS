import { Button } from '@/components/ui/button'
import CompanionCard  from '@/components/CompanionCard';
import React from 'react';
import CompanionsList from '@/components/CompanionsList';
import CTA from '@/components/CTA';
import { recentSessions } from '@/constants';

const Page = () => {
  return (
    <main>
      <h1 className="text-2xl">Popular Companions</h1>
        <section className="home-section">
        <CompanionCard 
        id = "123"
        name = "Neura the beauty Explorer"
        topic = 'Neural Network of the brain'
        subject = "Science"
        duration = {45}
        color = '#ffda6e'
        />
        <CompanionCard 
        id = "456"
        name = "Countsy the numbe rof wizzard"
        topic = 'Derivatives Integrals'
        subject = "Math"
        duration = {30}
        color = '#e5d0ff'
        />
        <CompanionCard 
        id = "789"
        name = "Verba the Vocabuary Builder"
        topic = "language"
        subject = "English Literature"
        duration = {30}
        color = '#BDE7FF'
        />
       
      </section>
      <section className="home-section">
        <CompanionsList 
        title = " Recently Completes Sessions"
        companions = {recentSessions}
        classNames = "w-2/3 max-lg:w-full"/>
        <CTA />
      </section>
    </main>
  );
}

export default Page