import { PrismaClient } from '@prisma/client'
import { categories, studyMaterials } from '../data/mockData'

const prisma = new PrismaClient()

async function main() {
  console.log('Start seeding...')

  // Clear existing data
  await prisma.studyMaterial.deleteMany()
  await prisma.category.deleteMany()

  const categoryMap = new Map()

  // Insert categories
  for (const cat of categories) {
    const newCat = await prisma.category.create({
      data: {
        name: cat.name,
        description: cat.description,
        icon: cat.icon,
      },
    })
    categoryMap.set(cat.name, newCat.id)
    console.log(`Created category: ${newCat.name}`)
  }

  for (const item of studyMaterials) {
    const mat = item as any;
    const categoryId = categoryMap.get(mat.category)
    
    if (!categoryId) {
      console.warn(`Category not found for material: ${mat.title} (${mat.category})`)
      continue
    }

    await prisma.studyMaterial.create({
      data: {
        title: mat.title,
        description: mat.description,
        subject: mat.subject,
        fileType: mat.fileType,
        fileSize: mat.fileSize,
        downloadUrl: mat.downloadUrl,
        previewUrl: mat.previewUrl,
        uploadDate: mat.uploadDate ? new Date(mat.uploadDate) : new Date(),
        rating: mat.rating,
        downloadCount: mat.downloadCount,
        tags: Array.isArray(mat.tags) ? mat.tags.join(',') : '',
        author: mat.author,
        pages: mat.pages,
        language: mat.language,
        level: mat.level,
        thumbnail: mat.thumbnail,
        categoryId: categoryId,
      },
    })
    console.log(`Created material: ${mat.title}`)
  }
  
  console.log('Seeding finished.')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
