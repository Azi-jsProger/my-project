import Alert from "../../components/alert/alert";
import {toast} from "react-toastify";


const showSucsess = (title,message) => {
    toast.success(
        <Alert
            title={title}
            message={message}
        />
    )
}

const showError = (title,message) => {
    toast.error(
        <Alert
            title={title}
            message={message}
        />
    )
}

export {
    showSucsess,
    showError
}