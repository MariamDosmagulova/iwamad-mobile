export type CampusEvent = { id: number; title: string; date: string; place: string; seats: number }

export const events: CampusEvent[] = [
    { id: 1, title: 'React study night', date: '2026-11-05', place: 'Room 302', seats: 20 },
    { id: 2, title: 'UI design workshop', date: '2026-11-12', place: 'Design lab, 4th floor', seats: 15 },
    { id: 3, title: 'Coffee with a senior developer', date: '2026-11-19', place: 'Campus café', seats: 3 },
    { id: 4, title: 'Hackathon kick-off', date: '2026-11-26', place: 'Main hall', seats: 50 },
]