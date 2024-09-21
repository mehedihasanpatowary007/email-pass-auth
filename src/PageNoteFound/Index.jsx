import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate()
    return (
      <div className="min-h-screen flex flex-col justify-center items-center gap-6">
        <img
          src="https://th.bing.com/th/id/R.953dd785698f1ba1bbb1c42cfafa850b?rik=119mkpceYuXcRg&pid=ImgRaw&r=0"
          alt="page_not_found_image"
        />
        <button className="uppercase px-3 py-1 bg-blue-400 hover:bg-blue-700 rounded" onClick={()=> navigate(-1)}>Back</button>
      </div>
    );
};

export default Index;