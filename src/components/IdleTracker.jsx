import { useIdleTimer } from "react-idle-timer";
import { toast } from "react-toastify";

function IdleTracker({ onStatusChange }) {
    const handleIdle = () => {
        onStatusChange(true);

        toast.warning("You have been inactive for 30 seconds");
    };

    const handleActive = () => {
        onStatusChange(false);
    };

    useIdleTimer({
        timeout: 30 * 1000,
        onIdle: handleIdle,
        onActive: handleActive,
        throttle: 500,
    });

    return null;
}

export default IdleTracker;
