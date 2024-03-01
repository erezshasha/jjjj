import classNames from 'classnames';
import styles from './new-component.module.scss';
import { ReactComponent } from '../../assets/typescript.svg';
import { ReactComponent as ReactComponent0 } from '../../assets/react.svg';

export interface NewComponentProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const NewComponent = ({ className }: NewComponentProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <img
                src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                alt=""
            />
            <ReactComponent0 />
            <ReactComponent />
            NewComponent
        </div>
    );
};
