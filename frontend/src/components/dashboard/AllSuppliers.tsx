import React from 'react'

interface Supplier {
  supplier_id: string
  supplier_name: string
  contact_email: string
  phone_number: string
  location: string
}

const allSupplierData: Supplier[] = [
  {
    supplier_id: '1',
    supplier_name: 'Shirley A. Lape',
    contact_email: 'shirley@example.com',
    phone_number: '123-456-7890',
    location: 'New York, NY'
  },
  {
    supplier_id: '2',
    supplier_name: 'Ryan Carroll',
    contact_email: 'ryan@example.com',
    phone_number: '234-567-8901',
    location: 'Los Angeles, CA'
  },
  {
    supplier_id: '3',
    supplier_name: 'Mason Nash',
    contact_email: 'mason@example.com',
    phone_number: '345-678-9012',
    location: 'Chicago, IL'
  },
  {
    supplier_id: '4',
    supplier_name: 'Luke Parkin',
    contact_email: 'luke@example.com',
    phone_number: '456-789-0123',
    location: 'Houston, TX'
  },
  {
    supplier_id: '5',
    supplier_name: 'Anthony Fry',
    contact_email: 'anthony@example.com',
    phone_number: '567-890-1234',
    location: 'Phoenix, AZ'
  }
]

const AllSuppliers: React.FC = () => (
  <div className="bg-white px-8 py-6 rounded-lg shadow-lg border border-gray-200 mb-10 mx-8">
    <strong className="text-gray-700 font-medium">Suppliers Information</strong>
    <div className="overflow-auto mt-4">
      <table className="w-full border-collapse text-sm text-gray-700">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-6 py-3 text-left">Supplier ID</th>
            <th className="border px-6 py-3 text-left">Supplier Name</th>
            <th className="border px-6 py-3 text-left">Contact Email</th>
            <th className="border px-6 py-3 text-left">Phone Number</th>
            <th className="border px-6 py-3 text-left">Location</th>
          </tr>
        </thead>
        <tbody>
          {allSupplierData.map((supplier) => (
            <tr key={supplier.supplier_id} className="even:bg-gray-50">
              <td className="border px-6 py-3">{supplier.supplier_id}</td>
              <td className="border px-6 py-3">{supplier.supplier_name}</td>
              <td className="border px-6 py-3">{supplier.contact_email}</td>
              <td className="border px-6 py-3">{supplier.phone_number}</td>
              <td className="border px-6 py-3">{supplier.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
)

export default AllSuppliers
