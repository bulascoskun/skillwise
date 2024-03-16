import mongoose from 'mongoose';

const CourseSchema = new mongoose.Schema({
  img: String,
  title: String,
  summary: String,
  description: String,
  category: {
    type: String,
    enum: ['highschool', 'kid', 'college'],
  },
  lecturer: {
    type: String,
    enum: [
      'Ellie Sanders',
      'Aiden Jones',
      'Emily Watson',
      'John Smith',
      'Uther Lightbringer',
      'Peter Jackson',
    ],
  },
});

export default mongoose.model('Course', CourseSchema);

//  {
//     img: "https://example.com/image.jpg",
//     title: "Örnek Kitap",
//     summary: "Bu kitap hakkında özet bilgi...",
//     category: "highschool"
//   }
