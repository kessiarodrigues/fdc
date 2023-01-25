import FaqPrincipal from "../components/faq"

export default function FaqView(){
  return (
    <div className="flex-col p-8 content-center bg-medium_gray-2">
      <div className="border-y-8 border-white mt-8 py-8 mb-4">
        <h2 className="text-primary_blue text-2xl font-NexaSlab text-center font-Light">
          FAQ
        </h2>
      </div>

      <FaqPrincipal />
    </div>
  );
}