import React, { useState } from 'react';

export default function LandingPage() {
  const [faqs, setFaqs] = useState([
    {
      question: "How do I book a cab using UCab?",
      answer: "Log into your account dashboard, select your pickup/drop states or cities, select your active ride class format, and request an allocation immediately.",
      isOpen: false
    },
    {
      question: "How are runtime ride fares calculated?",
      answer: "Fares are accurately tracked based on system kilometers alongside car-specific base tier multi-rates (Hatchback vs. Sedan specs).",
      isOpen: false
    },
    {
      question: "Can I manage active cab allocations?",
      answer: "Yes, any booked itinerary can be tracked or inspected directly via the client-side 'My Bookings' live interface table layout.",
      isOpen: false
    }
  ]);

  const [query, setQuery] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const toggleFaq = (index) => {
    setFaqs(faqs.map((faq, i) => i === index ? { ...faq, isOpen: !faq.isOpen } : faq));
  };

  const handleQuerySubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setQuery({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 3500);
  };

  return (
    <div className="container my-5">
      {/* Premium Yellow & Black Hero Section */}
      <div className="text-center p-5 rounded-4 mb-5 shadow-lg position-relative overflow-hidden" 
           style={{ backgroundColor: '#111111', border: '2px solid #ffcc00' }}>
        <h1 className="display-4 mb-2 text-uppercase tracking-tight" 
            style={{ color: '#ffcc00', fontWeight: '900' }}>
          Your Ride, Your Way
        </h1>
        <p className="lead text-white opacity-75 max-w-xl mx-auto mb-4">
          Reliable. Fast. Affordable. Book premium local or casual cabs anytime, anywhere.
        </p>
        
        {/* Central Vehicle Image Visualizer */}
        <div className="my-4">
          <img 
            src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=600&q=80" 
            alt="Premium Vehicle" 
            className="img-fluid rounded-3 shadow-lg" 
            style={{ maxWidth: '440px', width: '100%', height: '230px', objectFit: 'cover', border: '3px solid #ffcc00' }}
          />
        </div>

        <div className="mt-3">
          <span className="badge text-dark px-3 py-2 fw-bold text-uppercase tracking-wider shadow" style={{ backgroundColor: '#ffcc00' }}>
            UCab Build Active
          </span>
        </div>
      </div>

      {/* FAQs Dropdown Layout Wrapper */}
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h4 className="fw-bold mb-4 text-center text-uppercase tracking-wide" style={{ color: '#ffcc00' }}>Frequently Asked Questions</h4>
          
          <div className="accordion mb-5">
            {faqs.map((faq, index) => (
              <div className="accordion-item mb-3 text-white glass-card shadow-sm" style={{ borderRadius: '10px', overflow: 'hidden', backgroundColor: '#161616', border: '1px solid #333' }} key={index}>
                <h2 className="accordion-header">
                  <button 
                    className="accordion-button border-0 bg-transparent text-white fw-semibold shadow-none py-3" 
                    type="button" 
                    onClick={() => toggleFaq(index)}
                    style={{ color: faq.isOpen ? '#ffcc00' : '#fff' }}
                  >
                    {faq.question}
                  </button>
                </h2>
                {faq.isOpen && (
                  <div className="accordion-body border-top p-3 text-light opacity-75" style={{ backgroundColor: '#0b0b0b', borderColor: '#333' }}>
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* User Query Box Component */}
          <div className="card p-4 shadow-lg text-white glass-card" style={{ borderRadius: '16px', backgroundColor: '#111111', border: '2px solid #ffcc00' }}>
            <div className="text-center mb-3">
              <h4 className="fw-bold text-uppercase tracking-wide" style={{ color: '#ffcc00' }}>Have a Query?</h4>
              <p className="text-white-50 small mb-0">Drop your message below and our dispatch desk will respond instantly</p>
            </div>

            {submitted && (
              <div className="alert py-2 text-center small border-0 shadow fw-bold text-dark" role="alert" style={{ backgroundColor: '#ffcc00' }}>
                ✨ Query successfully cached! Main operational state updated.
              </div>
            )}

            <form onSubmit={handleQuerySubmit}>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label small text-uppercase fw-bold tracking-wider mb-1 text-white">Your Name</label>
                  <input 
                    type="text" 
                    className="form-control text-white form-control-sm" 
                    placeholder="Enter full name" 
                    value={query.name}
                    onChange={(e) => setQuery({...query, name: e.target.value})}
                    required 
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label small text-uppercase fw-bold tracking-wider mb-1 text-white">Email Address</label>
                  <input 
                    type="email" 
                    className="form-control text-white form-control-sm" 
                    placeholder="name@domain.com" 
                    value={query.email}
                    onChange={(e) => setQuery({...query, email: e.target.value})}
                    required 
                  />
                </div>
                <div className="col-12">
                  <label className="form-label small text-uppercase fw-bold tracking-wider mb-1 text-white">Message Context</label>
                  <textarea 
                    className="form-control text-white form-control-sm" 
                    rows="3" 
                    placeholder="Describe your issue or vehicle request parameters here..." 
                    value={query.message}
                    onChange={(e) => setQuery({...query, message: e.target.value})}
                    required
                  ></textarea>
                </div>
              </div>
              <button type="submit" className="btn w-100 fw-bold mt-4 py-2 shadow-sm btn-sm text-dark" style={{ backgroundColor: '#ffcc00', border: 'none' }}>
                Submit Dispatch Query
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}