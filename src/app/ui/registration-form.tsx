"use client";

function RegForm() {
  return (
    <section
      id="registration"
      className="h-fit w-full flex items-center justify-center sm:px-[32px] md:px-[100px] py-16 bg-[#ECEFF8]"
    >
      <div className="w-full h-full flex items-center justify-center rounded-xl">
        <iframe
          id="JotFormIFrame-242134684491055"
          title="ICT Summit Registration"
          allow="geolocation; microphone; camera; fullscreen"
          src="https://form.jotform.com/242134684491055"
          className=" min-h-[120vh] min-w-full rounded-xl"
        ></iframe>
        <script
          async
          src="https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js"
        ></script>
      </div>
    </section>
  );
}

export default RegForm;
