import BookAlzheimers from '@/app/Components/alzheimers-test-coupon-booking/BookAlzheimers';

// Private/unlisted page — intentionally hidden from search engines and not linked
// anywhere in site navigation. Accessible only via direct link (e.g. from a coupon).
export const metadata = {
    title: 'Alzheimer’s Test Coupon Booking | Dr. Dangs Lab',
    robots: {
        index: false,
        follow: false,
        nocache: true,
        googleBot: {
            index: false,
            follow: false,
            noimageindex: true,
        },
    },
};

export default function BookAlzheimersPage() {
    return <BookAlzheimers />;
}
