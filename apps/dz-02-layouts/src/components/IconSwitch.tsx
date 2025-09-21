import { TIconParams } from '../types';

export default function IconSwitch({ icon, onSwitch }: TIconParams) {
    return (
        <div className="icon-switch">
            <span className="material-icons" onClick={onSwitch}>
                {icon}
            </span>
        </div>
    );
};
