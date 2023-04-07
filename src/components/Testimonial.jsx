

const Testimonial = () => {
  return (
    <div id="testimonial">
      <h2>Testimonial</h2>

      <section>
        <TestimonialCard name={"Sarkhan"} feedback={"Thank you for your Services."} />

        <TestimonialCard name={"Ramzi"} feedback={"Wow what a portfolio, doesn't expected this!" }/>

        <TestimonialCard name={"John karter"} feedback={"Amazing dev Skills."}/>
      </section>
    </div>
  );
};

const TestimonialCard = ({ name, feedback }) => (
  <article>
    <img
      src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
      alt="User"
    />
    <h4>{name}</h4>
    <p>{feedback}</p>
  </article>
);

export default Testimonial;