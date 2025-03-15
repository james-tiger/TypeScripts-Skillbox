import Navigation from '@/components/Navigation';

// Define type for service
type Service = {
  id: number;
  title: string;
  description: string;
  details: string;
};

export default function Services() {
  // Simulate loading heavy service data
  const services: Service[] = [
    {
      id: 1,
      title: 'Web Development',
      description: 'We create responsive, user-friendly websites tailored to your business needs.',
      details: 'Our web development services include front-end development, back-end development, API integration, and more.',
    },
    {
      id: 2,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      details: 'We specialize in React Native, Flutter, and native iOS/Android development.',
    },
    {
      id: 3,
      title: 'UI/UX Design',
      description: 'User-centered design solutions that enhance user experience and engagement.',
      details: 'Our design process includes user research, wireframing, prototyping, and usability testing.',
    },
    {
      id: 4,
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies to grow your online presence.',
      details: 'Services include SEO, content marketing, social media management, and PPC advertising.',
    },
    {
      id: 5,
      title: 'E-commerce Solutions',
      description: 'End-to-end e-commerce development with secure payment gateways.',
      details: 'We build custom e-commerce solutions using platforms like Shopify, WooCommerce, and Magento.',
    },
  ];

  return (
    <div className="container">
      <Navigation />
      <div className="page services-page">
        <h1>Our Services</h1>
        <p>Explore the range of services we offer to help your business grow.</p>
        
        <div className="services-list">
          {services.map(service => (
            <div key={service.id} className="service-card">
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <div className="service-details">
                <h3>Service Details</h3>
                <p>{service.details}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="cta-section">
          <h2>Ready to get started?</h2>
          <p>Contact us today to discuss your project requirements.</p>
          <button className="cta-button">Contact Us</button>
        </div>
      </div>
    </div>
  );
} 