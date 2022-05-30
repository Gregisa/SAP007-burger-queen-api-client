import { Link } from "react-router-dom";
function SubmitButton() {
    return (
        <>
            <button
                type="submit"
                className="submit-button"
            >
                <Link
                className="btn-route"
                to="/Hall">
                Entrar
                </Link>
            </button>
        </>
    )
};

export default SubmitButton;