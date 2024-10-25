import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
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
  )
}
