import TemplateCard from "@/components/TemplateCard";
import { getAllStates, getFormsByState } from "@/services/forms";
import NotFound from "@/components/NotFound";

type Props = {
  params: {
    stateName: string;
  };
};

const TemplateByState = async ({ params: { stateName } }: Props) => {
  const forms = await getFormsByState(stateName);

  if (!forms) return <NotFound />;
  return (
    <div className="wrapper max-width">
      <div className="py-[31px] flex flex-col gap-5">
        <h2 className="text-gray-500 text-[34px] md:text-[42px] font-500 leading-[120%]">
          {decodeURI(stateName)} of Sale Forms
        </h2>

        {forms?.length === 0 ? (
          <div className="text-gray-500 text-[24px] font-500 leading-[120%] w-full text-center flex items-center justify-center h-[80vh]">
            No forms found
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {forms.map((form) => (
              <TemplateCard key={form._id} form={form} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TemplateByState;

// next js static generation
export async function generateStaticParams() {
  const states = await getAllStates();
  let params = states.map((s) => ({ params: { stateName: s } }));
  return params;
}
