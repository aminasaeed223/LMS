import React from 'react'
import { cn } from "@/lib/utilis";


import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Link } from 'lucide-react';


interface CompanionsListProps{
    title:string;
    companions ?: Companion[];
    classNames ?:string;
}

const CompanionsList = ({ title, companions, classNames } : CompanionsListProps) => {
  return (
    <article className={cn( 'companion-list', classNames)}>
        <h2 className='font-bold text-3xl'>Recent Sessions</h2>
        <Table>
  
  <TableHeader>
    <TableRow>
      <TableHead className=" text-lg w-2/3">Lessons</TableHead>
      <TableHead className='text-lg'>Subject</TableHead>
      <TableHead className='text-lg right-text'>Duration</TableHead>
     
    </TableRow>
  </TableHeader>
  <TableBody>
    {companions?.map(({ id, name, subject, duration, topic}) => 
    <TableRow>
        <TableCell key = {companion.id}>
                            <Link href={`/companions/${id}`}>
                                {subject}
                            </Link>
                        </TableCell>
    </TableRow>
    
    
    )}
    
  </TableBody>
</Table>
    </article>
  )
}

export default CompanionsList
