import bool from '~/randomize/bool';
import float from '~/randomize/float';
import integer from '~/randomize/integer';

const choice = (max = 1, min = 0, options = {}) => {
    if (options.float === true) {
        return float(max, min);
    } else if (options.bool === true) {
        return bool();
    } else {
        return integer(max, min);
    }
};

export default choice;
