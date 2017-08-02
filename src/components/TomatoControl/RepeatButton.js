export default function (React, PropTypes) {

    class RepeatButton extends React.Component {

        static propTypes = {
            onClick: PropTypes.func.isRequired
        };

        render() {
            return (
                <button className="repeat-button" onClick={this.props.onClick}>
                    <svg width="22px" height="22px" viewBox="0 0 22 22" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <title>icon-refresh</title>
                        <path d="M3.90479943,6 C5.45199288,3.77879758 8.00282238,2.4 10.8,2.4 C14.402546,2.4 17.5692012,4.68881263 18.7349909,8.03596868 C18.9529757,8.66183544 19.6370525,8.99248912 20.2629193,8.77450435 C20.888786,8.55651959 21.2194397,7.87244276 21.0014549,7.246576 C19.5022908,2.94225225 15.4315782,0 10.8,0 C7.47164897,0 4.41352582,1.51948187 2.4,4.00970959 L2.4,2.4 C2.4,1.7372583 1.8627417,1.2 1.2,1.2 C0.5372583,1.2 0,1.7372583 0,2.4 L0,7.2 C0,7.8627417 0.5372583,8.4 1.2,8.4 L6,8.4 C6.6627417,8.4 7.2,7.8627417 7.2,7.2 C7.2,6.5372583 6.6627417,6 6,6 L3.90479943,6 Z M17.6952726,15.6 C16.1489047,17.8200578 13.5981958,19.2 10.8,19.2 C7.22064667,19.2 4.06991809,16.9405424 2.88627403,13.6243395 C2.66348908,13.0001653 1.97689303,12.674775 1.35271884,12.89756 C0.72854464,13.1203449 0.403154362,13.806941 0.62593931,14.4311152 C2.14799594,18.6954449 6.19828866,21.6 10.8,21.6 C14.1294327,21.6 17.1872858,20.0794697 19.2,17.5903749 L19.2,19.2 C19.2,19.8627417 19.7372583,20.4 20.4,20.4 C21.0627417,20.4 21.6,19.8627417 21.6,19.2 L21.6,14.4 C21.6,13.7372583 21.0627417,13.2 20.4,13.2 L15.6,13.2 C14.9372583,13.2 14.4,13.7372583 14.4,14.4 C14.4,15.0627417 14.9372583,15.6 15.6,15.6 L17.6952726,15.6 Z"></path>
                    </svg>
                </button>
            );
        }

    }

    return RepeatButton;

}