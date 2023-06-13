import { useState  } from "react";

const useAppBadge = () => {
    const [counter, setCounter] = useState(0);
    const navigator = window.navigator as any;
    const setBadge = () => {
        setCounter(counter + 1);
        if (navigator.setAppBadge) {
          navigator.setAppBadge(counter);
        } else if (navigator.setClientBadge) {
            navigator.setClientBadge();
        }
    }

    const clearBadge = () => {
        setCounter(1);
        if (navigator.clearAppBadge) {
          navigator.clearAppBadge();
        } else if (navigator.clearClientBadge) {
            navigator.clearClientBadge();
        }
    }

    return [setBadge, clearBadge];
};

export default useAppBadge;