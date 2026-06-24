import HopWidgetLoader from './HopWidgetLoader';

export const metadata = {
    title: 'Book an Enquiry - Dr. Dangs Lab',
    description: 'Book your lab test enquiry with Dr. Dangs Lab',
};

export default function EnquiriesPage() {
    return (
        <div style={{ minHeight: '80vh', padding: '20px', maxWidth: '1200px', margin: '0 auto', backgroundColor: '#ffffff' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '20px', color: '#333', fontFamily: 'Roboto, sans-serif' }}>
                Book an Enquiry
            </h1>
            <HopWidgetLoader />
        </div>
    );
}
