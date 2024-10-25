import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <div>
      <div className="flex items-center justify-between bg-gray-100 p-4 border-b">
        <div className="flex space-x-4">
          <Button variant="ghost">Home</Button>
          <Button variant="ghost">Projects</Button>
          <Button variant="ghost">Settings</Button>
        </div>
        <div className="flex space-x-4">
          <Button variant="outline">Sign In</Button>
          <Button>Sign Up</Button>
        </div>
      </div>
      <div className="p-4 flex justify-center">
        <Card>
          <CardContent>
            <div>
              <Label htmlFor="learningRate">Learning Rate</Label>
              <Input id="learningRate" type="number" placeholder="0.001" />
            </div>
            <div>
              <Label htmlFor="batchSize">Batch Size</Label>
              <Input id="batchSize" type="number" placeholder="32" />
            </div>
            <div>
              <Label htmlFor="epochs">Epochs</Label>
              <Input id="epochs" type="number" placeholder="10" />
            </div>
            <Button>Save Settings</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
