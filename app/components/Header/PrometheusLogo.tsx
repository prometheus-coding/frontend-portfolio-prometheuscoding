import Logo from '../../../public/logo/prometheus-logo.svg'
import Image from 'next/image';
const PrometheusLogo = () => {
  return (
    <div className="w-1/6 pl-8 flex text-white">
      <div className=""><Image src={Logo} alt="prometheus-logo" width={50}/></div>
    </div>
  );
};

export default PrometheusLogo;
