import React from 'react';
import GreetingTest from '../components/for-tests/GreetingTest';
import CounterTest from '../components/for-tests/CounterTest';
import UserProfileTest from '../components/for-tests/UserProfileTest';

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
        <pre className='cmd-style'>
          <code tag='Greeting test Code'>
{`describe("GreetingTest Component", () => {

  it("renders a default greeting when no name is provided", () => {
    render(<GreetingTest />);
    const defaultGreetingElement = screen.getByText("Hello, World!");
    expect(defaultGreetingElement).toBeInTheDocument();
  });

  it("renders the greeting message with the provided name", () => {
    const name = "Test";
    render(<GreetingTest name={name} />);
    const greetingElement = screen.getByText(\`Hello, \${name}!\`);
    expect(greetingElement).toBeInTheDocument();
  });
});`}
          </code>
        </pre>
      </section>
      <section className='card' tag='CounterTest'>
        <h2>Counter Test</h2>
        <CounterTest />
        <pre className='cmd-style'>
          <code tag='Counter test Code'> 
{`describe("CounterTest Component", () => {
  it("Test the count when a button is clicked", async () => {

    render(<CounterTest />);
    const buttonIncrement= screen.getByRole("button", {name: /Increment/i} );
    const buttonDecrement = screen.getByRole("button", {name: /Decrement/i});
    const buttonReset = screen.getByRole("button", {name: /Reset/i});
    const counterValue = screen.getByTestId ("counter-value");

    expect(counterValue.textContent).toEqual("0");

    await userEvent.click(buttonIncrement); 
    expect(counterValue.textContent).toEqual("1");

    await userEvent.click(buttonIncrement);
    expect(counterValue.textContent).toEqual("2");  

    await userEvent.click(buttonDecrement);
    expect(counterValue.textContent).toEqual("1");

    await userEvent.click(buttonIncrement);
    expect(counterValue.textContent).toEqual("2");  

    await userEvent.click(buttonReset);
    expect(counterValue.textContent).toEqual("0");
  });
});`}
          </code>
        </pre>
      </section>
      <section className='card' tag='UserProfileTest'>
        <h2>User Profile Test</h2>
        <UserProfileTest userId = {4}/>
        <pre className='cmd-style'>
          <code tag='UserProfile test Code'>
{`describe("UserProfileTest Component", () => {
    beforeEach(() => {   
        globalThis.fetch = vi.fn()
    })
    afterEach(() => {
        vi.resetAllMocks()
    })
    it("Fetches and displays user profile data", async () => {
        globalThis.fetch.mockResolvedValueOnce({
            json: async () => ({
                id: 4,
                name: "Test User",
                email: "testuser@gmail.com"
            })
        });
        render(<UserProfileTest userId={4} />);
        expect(screen.getByText(/loading/i)).toBeInTheDocument();
        await waitFor(() => {
            expect(screen.
            getByRole("heading", {name: /test user/i})).
            toBeInTheDocument();
            expect(screen.
            getByText(/@gmail.com/i)).
            toBeInTheDocument();
        });
    });
});`}
          </code>
        </pre>
      </section>
  
    </>
  );
};

export default TestingPage;