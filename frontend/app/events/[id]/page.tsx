import BookingForm from "@/components/BookingForm"

export default async function EventPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  return (
    <div className="p-4">
      <BookingForm />
    </div>
  )
}