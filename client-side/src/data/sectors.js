import {
  Building,
  Factory,
  Hospital,
  House,
  Landmark,
  Map,
  Trees,
} from 'lucide-react'

const sectors = [
  { id: 1, title: 'Residential', image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80', icon: House },
  { id: 2, title: 'Commercial', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80', icon: Building },
  { id: 3, title: 'Industrial', image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80', icon: Factory },
  { id: 4, title: 'Institutional', image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=900&q=80', icon: Landmark },
  { id: 5, title: 'Healthcare', image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=900&q=80', icon: Hospital },
  { id: 6, title: 'Infrastructure', image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=900&q=80', icon: Map },
  { id: 7, title: 'Urban Planning', image: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=900&q=80', icon: Trees },
]

export default sectors
