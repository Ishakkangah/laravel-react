import PageComponent from "../components/PageComponent";
import SurveyListItem from "../components/SurveyListItem";
import { userStateContext } from "../contexts/ContextProvider";

export default function Surveys() {
    const { surveys } = userStateContext();
    return (
        <PageComponent title="Surveys">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
                {surveys.map((survey) => (
                    <SurveyListItem survey={survey} key={survey.id} />
                ))}
            </div>
        </PageComponent>
    );
}
