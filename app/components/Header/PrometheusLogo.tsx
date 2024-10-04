import Logo from '../../../public/logo/prometheus-logo.svg'
import Image from 'next/image';
const PrometheusLogo = () => {
  return (
    <div className="w-1/6 pl-8 text-white">
      <div className="flex items-center text-2xl"><Image src={Logo} alt="prometheus-logo" width={50}/> Prometheus</div>
    </div>
  );
};

export default PrometheusLogo;
