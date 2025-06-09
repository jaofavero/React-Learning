import React from 'react';
import GreetingTest from '../components/testing/GreetingTest';
import CounterTest from '../components/testing/CounterTest';
import UserProfileTest from '../components/testing/UserProfileTest';

const TestingPage = () => {
  return (
    <>
      <section className="info-section">
        <h3>Exploring Testings</h3>
        <p>Bellow you can see diferents types of tests in React (Vitest).</p>
      </section>
      <section className='card' tag='GreetingTest'>
        <h2>Greeting Test</h2>
        <GreetingTest name={"Code"} />
      </section>
      <section className='card' tag='CounterTest'>
        <h2>Counter Test</h2>
        <CounterTest />
      </section>
      <section className='card' tag='UserProfileTest'>
        <h2>User Profile Test</h2>
        <UserProfileTest userId = {4}/>
      </section>
  
    </>
  );
};

export default TestingPage;